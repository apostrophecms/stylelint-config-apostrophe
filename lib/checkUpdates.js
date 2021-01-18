const pkg = require("../package.json");

const getInstalledVersion = ({ name, version }) => {
  const installedVersion = require(`${name}/package.json`).version;
  return version === installedVersion ? false : installedVersion;
};

const getVersionNumber = string => {
  const semver = /[~^><=x]/gi;
  return string.replace(semver, "");
};

const checkUpdates = () => {
  console.log(`\nstylelint-config-apostrophe:\n
    Checking for stylelint-config updates...`);

  const { dependencies } = pkg;

  const availableUpdates = {};

  Object.keys(dependencies).forEach(dependency => {
    const name = dependency;
    const version = getVersionNumber(dependencies[dependency]);

    const updateAvailable = getInstalledVersion({ name, version });
    if (updateAvailable) {
      availableUpdates[name] = updateAvailable;
    }
  });

  if (Object.keys(availableUpdates).length) {
    console.log(`
    Updates available for the following configs: \n
${JSON.stringify(availableUpdates, null, 4)}\n`);
  } else {
    console.log("    🎉 Stylelint config is up to date.");
  }
};

module.exports.check = checkUpdates();
