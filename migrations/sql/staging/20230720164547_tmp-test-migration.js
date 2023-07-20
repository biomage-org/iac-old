const objectHash = require('object-hash');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  const newHash = objectHash.sha1(
    "hoalhola",
    { unorderedObjects: true, unorderedArrays: true, unorderedSets: true },
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
