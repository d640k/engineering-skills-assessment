const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return "0";
  }

  let candidate = event.partitionKey || event;

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (!event.partitionKey || candidate.length > 256) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};
