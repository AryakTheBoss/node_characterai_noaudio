

export default class AudioInterface {
    /**
     * Sets the `sox` path. Will call via PATH/Shell first if null (default).
     */
    static soxPath: string | null = null;

    /**
     * Gets all the available audio devices
     * @returns Device infos about all devices
     */
    static getAllDevices() { return null; }

    /**
     * Gets all the available microphones
     * @returns Device infos about all the available microphones
     */
    static getMicrophones() {
        return null;
    }
    /**
     * Gets all the available speakers
     * @returns Device infos about all the available speakers
     */
    static getSpeakers() {
        return null;
    }


    /**
     * Gets a microphone with its id
     * @returns Found device info or `undefined`
     */
    static getMicrophoneFromId(id: number) {
        return null;
    }
    /**
     * Gets a microphone from its name
     * @returns Found device info or `undefined`
     */
    static getMicrophoneFromName(name: string) {
        return null;
    }
    
    /**
     * Gets a speaker with an id
     * @returns Found device info or `undefined`
     */
    static getSpeakerFromId(id: number) {
        return null;
    }
    /**
     * Gets a speaker from its name
     * @returns Found device info or `undefined`
     */
    static getSpeakerFromName(name: string) {
        return null;
    }
};