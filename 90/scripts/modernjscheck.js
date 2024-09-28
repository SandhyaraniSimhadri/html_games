'use strict';
(function() {
  let pass = true;

  // Since (null ?? 2) will always return 2, this condition will never be true
  // If this is intended to check for modern JS support, no need for the comparison
  pass = false;  // Directly set the pass to false since the condition is redundant

  if (pass) window["C3_ModernJSSupport_OK"] = true;
})();
