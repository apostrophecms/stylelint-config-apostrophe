/* eslint-disable n/handle-callback-err */

// NOTE: tried https://stylelint.io/developer-guide/plugins/#testing but it would not work with our CommonJS usage.

const assert = require('assert');
const { exec } = require('node:child_process');

const ERROR_MESSAGE = 'Expected "& { ... }" block after "@include" at-rule if declarations are present. See https://sass-lang.com/documentation/breaking-changes/mixed-decls';

describe('require-nested-after-include stylelint rule', function() {
  this.timeout(10000);

  it('should fail when a declaration after an at-rule is not scoped into a `& { ... }` block', function(done) {
    exec('npx stylelint test/plugins/require-nested-after-include/bad.scss', (error, stdout, stderr) => {
      assert(stderr.includes(ERROR_MESSAGE));
      done();
    });
  });

  it('should pass when a declaration after an at-rule is scoped into a `& { ... }` block', function(done) {
    exec('npx stylelint test/plugins/require-nested-after-include/good-1.scss', (error, stdout, stderr) => {
      assert(!stderr.includes(ERROR_MESSAGE));
      done();
    });
  });

  it('should pass when there is no declaration after an at-rule', function(done) {
    exec('npx stylelint test/plugins/require-nested-after-include/good-2.scss', (error, stdout, stderr) => {
      assert(!stderr.includes(ERROR_MESSAGE));
      done();
    });
  });
});
