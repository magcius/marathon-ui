const ValidConstraints = require("../constants/ValidConstraints");

const AppFormErrorMessages = {
  appId: [
    "ID must not be empty",
    "ID cannot contain whitespaces"
  ],
  constraints: [
    "Invalid constraints format or operator. Supported operators are " +
    ValidConstraints.map((c) => `'${c}'`).join(", ") +
    ". See https://mesosphere.github.io/marathon/docs/constraints.html."
  ],
  cpus: ["CPUs must be a non-negative Number"],
  disk: ["Disk Space must be a non-negative Number"],
  env: ["Key cannot be blank"],
  executor: ["Invalid executor format"],
  instances: ["Instances must be a non-negative Number"],
  mem: ["Memory must be a non-negative Number"],
  ports: ["Ports must be a comma-separated list of numbers"],
  getMessage: function (fieldId, index = 0) {
    if (this[fieldId] != null && this[fieldId][index] != null) {
      return this[fieldId][index];
    }
    return "General error";
  }
};

module.exports = Object.freeze(AppFormErrorMessages);
