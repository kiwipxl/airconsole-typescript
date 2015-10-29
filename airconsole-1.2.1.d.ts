
/**
 *  An object containing information about a device in this session.
 *  @typedef {object} AirConsole~DeviceState
 *  @property {string} uid - The globally unique ID of the user.
 *  @property {string|undefined} custom - Custom device data that this API can set.
 *  @property {string|undefined} nickname - The nickname of the user.
 *  @property {boolean|undefined} slow_connection - If the user has a high server latency.
 */
interface DeviceState {

  /**
   *  The globally unique ID of the user.
   */
  uid: string;
  /**
   *  Custom device data that this API can set.
   */
  custom: string | void;
  /**
   *  The nickname of the user.
   */
  nickname: string | void;
  /**
   *  If the user has a high server latency.
   */
  slow_connection: boolean | void;
}

/**
 *  An object containing information about a device in this session.
 *  @typedef {object} AirConsole~Config
 *  @property {string} orientation - AirConsole.ORIENTATION_PORTRAIT or
 *            AirConsole.ORIENTATION_LANDSCAPE.
 *  @property {boolean|undefined} synchronize_time - If set to true, you can
 *            call getServerTime() to get the time on the game server.
 *            Default is false.
 *  @property {boolean|undefined} setup_document - Sets up the document so
 *            nothing is selectable, zoom is fixed to 1 and scrolling is
 *            disabled (iOS 8 clients drop out of fullscreen when scrolling).
 *            Default: true
 */
declare interface Config {
    /**
     *  AirConsole.ORIENTATION_PORTRAIT or AirConsole.ORIENTATION_LANDSCAPE.
     */
    orientation: string;
    /**
     *  If set to true, you can call getServerTime() to get the time on
     *  the game server. Default is false.
     */
    synchronize_time: boolean | void;
    /**
     *  Sets up the document so nothing is selectable, zoom is fixed to 1 and scrolling
     *  is disabled (iOS 8 clients drop out of fullscreen when scrolling). Default: true
     */
    setup_document: boolean | void;
}

/**
 *  Your gateway object to the N-Dream Game Console.
 *  @interface
 *  @property {Array.<AirConsole~DeviceState>} devices - An array of the device
 *            data of all devices. The position is equal to the device ID of
 *            that device (The first element is the screen).
 *            An element can be undefined if the has left.
 *  @property {number} device_id - The device_id of this device.
 *  @property {number} server_time_offset - The difference between this devices
 *            time and the time on the gameserver. Only correct if the opts
 *            param has "synchronize_time" set to true and onReady was called.
 */
interface AirConsole {

  /**
   *  Current version of airconsole
   */
  version: string;
  /**
   *  An array of the device data of all devices. The position is equal
   *  to the device ID of that device (The first element is the screen).
   *  An element can be undefined if the has left.
   */
  devices: Array<DeviceState>;
  /**
   *  The difference between this devices time and the time on the
   *  gameserver. Only correct if the opts param has "synchronize_time"
   *  set to true and onReady was called.
   */
  server_time_offset: number;
  /**
   *  The device_id of this device.
   */
  device_id: number;

  /**
  *   Sends a message to all devices.
  */
  broadcast(data: any): void;
  /**
   *  Sets the custom property in this devices DeviceState object.
   *  @param device_id {number | undefined} The device ID of which you want the custom state. Default is this device.
   *  @return The custom data previously set by the device.
   */
  getCustomDeviceState(device_id: number | void): Object | void;
  /**
   *  Returns the nickname of the user.
   *  @param device_id {number | undefined} The device id for which you want the nickname. Default is this device.
   *  @return string | undefined
   */
  getNickname(device_id: number | void): string | void;
  /**
   *  Returns the url to a profile picture of the user.
   *  @param device_id {number | undefined} The device id for which you want profile picture. Default is this device.
   *  @param size	{number | undefined} The size of in pixels of the picture. Default is 64.
   *  @return string | undefined
   */
  getProfilePicture(device_id: number | void, size: number | void): string | void;
  /**
   *  Returns the current time of the game server. Can only be called if the AirConsole was instantiated
   *  with the "synchronize_time" opts set to true and after onReady was called.
   *  @return Timestamp in milliseconds.
   */
  getServerTime(): number;
  /**
   *  Sends a message to other devices.
   *  @param to {number | undefined} The device ID to send the message to. If to is undefined,
   *  the message is sent to all devices (except this one).
   *  @param data {any} The data to send
   *  @return string | undefined
   */
  message(to: number | void, data:any): void;
  /**
   *  Request that the devices (screen and players) return to the start screen.
   */
  navigateHome(): void;
  /**
   *  Gets called when a device joins/leaves/updates it's DeviceState.
   *  @param device_id {number} the device ID that changed it's DeviceState.
   *  @param user_data {DeviceState} the data of that device. If undefined, the device has left.
   */
  onDeviceStateChange(device_id, user_data: DeviceState | Object): void;
  /**
   *  @param from {number} The device ID that sent the message.
   *  @param data {any} The data that was sent.
   */
  onMessage(from: number, data: any): void;
  /**
   *  Gets called when the game console is ready.
   *  @param code {string} The AirConsole join code.
   */
  onReady(code: string): void;
  /**
   *  Sets the custom property in this devices DeviceState object.
   *  @param data {Object} The custom data to set.
   */
  setCustomDeviceState(data: DeviceState | Object): void;
  /**
   *  Sets the device orientation.
   *  @param orientation {string} AirConsole.ORIENTATION_PORTRAIT or AirConsole.ORIENTATION_LANDSCAPE.
   */
  setOrientation(orientation: string): void;
  /**
   *  Shows or hides the default UI.
   *  @param visible {boolean} Whether to show or hide the default UI.
   */
  showDefaultUI(visible: boolean): void;
}

interface AirConsoleStatic {

  /**
   *  Your gateway object to the N-Dream Game Console.
   *  @constructor
   *  @param {AirConsole~Config} opts - Constructor config.
   */
  new(opts?: Config | Object): AirConsole;

  /**
   *  The device ID of the game screen.
   */
  ORIENTATION_PORTRAIT: string;
  /**
   *  The device ID of the game screen.
   */
  ORIENTATION_LANDSCAPE: string;
  /**
   *  The device ID of the game screen.
   */
  SCREEN: number;
}

declare var AirConsole: AirConsoleStatic;
declare var DeviceState: DeviceState;
declare var Config: Config;
