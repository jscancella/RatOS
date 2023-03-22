#!/usr/bin/env bash

if [[ -e /etc/wpa_supplicant/wpa_supplicant.conf ]]
then
  #get info from wpa_supplicant
  SSID=`grep -E "^\s+ssid" /etc/wpa_supplicant/wpa_supplicant.conf | sed 's/^[[:space:]]*//g' | cut -c 7- | sed 's/.$//'`
  #PASSWORD=`grep -E "^\s+#psk" /etc/wpa_supplicant/wpa_supplicant.conf | sed 's/^[[:space:]]*//g' | cut -c 6-`
  PASSWORD=`grep -E "^\s+psk" /etc/wpa_supplicant/wpa_supplicant.conf | sed 's/^[[:space:]]*//g' | cut -c 5-`
  nmcli dev wifi connect "${SSID}" password "${PASSWORD}"
fi

#if wifi is not connected
ip link show dev wlan0 | grep -q "state UP"
check=$?
if [ "$check" -ne 0 ]
then
        /usr/bin/create_ap --config /etc/create_ap.conf
fi