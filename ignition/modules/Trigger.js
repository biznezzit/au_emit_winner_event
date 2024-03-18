const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TriggerModule", (m) => {

  const trigger = m.contract("Trigger");

  return { trigger };
});
