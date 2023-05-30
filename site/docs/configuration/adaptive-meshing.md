---
sidebar_position: 2
---

# Adaptive Meshing (BETA)

RatOS comes with it's own adaptive meshing (functionality was previously handled by PAM by Helge Keck), similar to KAMP. When enabled and configured in your slicer, RatOS will only probe the print area and your configured probe location, potentially saving a lot of time on smaller prints on bigger printers. RatOS will keep the resolution of your mesh (probes per mm), so that you always get consistent mesh performance. Contrary to KAMP and PAM, RatOS doesn't move your prime location, instead it probes the prime location (constrained by min/max bed_mesh settings) a single time and uses the difference between the probe result and your z_offset to dynamically apply a gcode offset only for the prime macro. This ensures no collision with prime blob and the toolhead on small meshes.

:::warning
Adaptive priming is currently **NOT** supported for Beacon. It is expected to be supported in the near future, once beacon probe results can be read from macros. RatOS will automatically skip priming if Beacon is detected.
:::

## Macro configuration

To enable adaptive priming set `variable_adaptive_mesh` to `True` in your RatOS macro configuration section (if it isn't already there, add it):

| Name                   | Possible Values | Default | Description                        |
| ---------------------- | --------------- | ------- | ---------------------------------- |
| variable_adaptive_mesh | True / False    | False   | Whether to enable adaptive meshing |

:::info
If you are currently using PAM, you should delete the PAM includes from printer.cfg before proceeding. Afterwards you can delete the PAM directory and remove the PAM moonraker.conf entry.
:::

## Slicer configuration

Adaptive meshing requires that you provide print area coordinates to the START_PRINT macro, you can copy and paste the START_PRINT macro for your slicer below.

### PrusaSlicer / SuperSlicer

```properties
START_PRINT EXTRUDER_TEMP=[first_layer_temperature] BED_TEMP=[first_layer_bed_temperature] X0={first_layer_print_min[0]} Y0={first_layer_print_min[1]} X1={first_layer_print_max[0]} Y1={first_layer_print_max[1]}
```

### OrcaSlicer / SoftFever

```properties
START_PRINT EXTRUDER_TEMP=[nozzle_temperature_initial_layer] BED_TEMP=[bed_temperature_initial_layer_single] X0={first_layer_print_min[0]} Y0={first_layer_print_min[1]} X1={first_layer_print_max[0]} Y1={first_layer_print_max[1]}
```

### Ideamaker

```properties
START_PRINT EXTRUDER_TEMP={temperature_extruder1} BED_TEMP={temperature_heatbed} X0={print_pos_min_x} Y0={print_pos_min_y} X1={print_pos_max_x} Y1={print_pos_max_y}
```

### Simplify 3D V5

```properties
START_PRINT EXTRUDER_TEMP=[extruder0_temperature] BED_TEMP=[bed0_temperature] X0=[build_min_x] Y0=[build_min_y] X1=[build_max_x] Y1=[build_max_y]
```

### Cura

To make adaptive meshing work with Cura you need to install a post processing plugin

1. in cura open menu `Help -> Show configuration folder`
2. Copy the following and save it as `MeshPrintSize.py` in the `scripts` folder

```python
# --------------------------------------------------------------------------------
# Original Version from https://gist.github.com/frankbags
# https://gist.github.com/frankbags/c85d37d9faff7bce67b6d18ec4e716ff
#
# Modified version from https://github.com/kmarty
# https://github.com/kmarty/klipper_config_km_addons/blob/master/bed_mesh_calibrate/MeshPrintSize.py
#
# thank you frankbags and kmarty!
# --------------------------------------------------------------------------------

import re #To perform the search and replace.

from ..Script import Script

class MeshPrintSize(Script):

    def getSettingDataString(self):
        return """{
            "name": "Mesh Print Size",
            "key": "MeshPrintSize",
            "metadata": {},
            "version": 2,
            "settings":{}
        }"""

    def execute(self, data):
        minMaxXY = {'MINX':0,'MINY':0,'MAXX':0,'MAXY':0}
        re_pattern = re.compile(r'%(' + r'|'.join(minMaxXY.keys()) + r')%')
        minmax_counter = len(minMaxXY)

        for i in range(len(data)):
            # in Cura "layer' != "line" :-(
            for k,v in minMaxXY.items():
                if minmax_counter:
                    result = re.search(r';' + k + r':\s*(\d*\.\d+|\d+)', data[i])
                    if result:
                        minMaxXY[k] = result.group(1)
                        minmax_counter -= 1
                else:
                    if re_pattern.search(data[i]):
                        data[i] = re.sub(r'%' + k + r'%', v, data[i])

        return data
```

3. restart cura
4. in cura open menu `Extensions -> Post processing -> Modify G-Code` and select `Mesh Print Size`

Modify start gcode to:

```properties
START_PRINT EXTRUDER_TEMP={material_print_temperature_layer_0} BED_TEMP={material_bed_temperature_layer_0} X0=%MINX% Y0=%MINY% X1=%MAXX% Y1=%MAXY%
```

## Relative reference index

RatOS Adaptive Meshing currently doesn't modify the relative reference index, it's generally not advised to use relative reference index with adaptive meshing.
