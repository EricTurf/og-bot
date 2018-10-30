let settings = {};

const SettingsService = {
  get() {
    return settings;
  },
  set(newSettings) {
    settings = { ...settings, newSettings };
  },
};

const getService = () => SettingsService;

export default getService;
