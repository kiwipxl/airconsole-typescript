
interface AirConsole {

  version:string;
  devices;
  server_time_offset:number;

  getServerTime(): number;
  message(to: number, data:any);
  navigateHome();
}

interface AirConsoleStatic {

  /**
  * Your gateway object to the N-Dream Game Console.
  * @constructor
  * @property {Array.<AirConsole~DeviceState>} devices - An array of the device
  *           data of all devices. The position is equal to the device ID of
  *           that device (The first element is the screen).
  *           An element can be undefined if the has left.
  * @property {number} device_id - The device_id of this device.
  * @property {number} server_time_offset - The difference between this devices
  *           time and the time on the gameserver. Only correct if the opts
  *           param has "synchronize_time" set to true and onReady was called.
  * @param {AirConsole~Config} opts - Constructor config.
  */
  new(opts:any): AirConsole;

  ORIENTATION_PORTRAIT:string;
  ORIENTATION_LANDSCAPE:string;
  SCREEN:number;
}

declare var AirConsole: AirConsoleStatic;
