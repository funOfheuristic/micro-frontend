// Core libraries such as react, angular, redux, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set(['@angular/core', '@angular/common']);

module.exports = {
  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return {
        ...defaultConfig,
        singleton: true, // only a single version of the library should be loaded
        strictVersion: true,
      };
    }

    // Returning false means the library is not shared.
    return false;
  },
};
