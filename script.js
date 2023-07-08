const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

//Battery API

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then(battery => {
      function updateAllBatteryDetails() {
        updateChrgingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeChangeInfo();
      }
      updateAllBatteryDetails();
      //Battery Charging change
      battery.addEventListener("chargingchange", () => {
        updateChrgingInfo();
      });
      function updateChrgingInfo() {
        const isCharging = battery.charging ? "Yes" : "No";
        batteryCharging.innerHTML = isCharging;
      }

      //Battery charging time
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeChangeInfo();
      });
      function updateChargingTimeChangeInfo() {
        console.log(battery.chargingTime);
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      //Battery Discharging time
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      }
      //Battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });

      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
      //Battery status
    });
  }
};

battery();
