// resolve(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): string | null {
//   const typoPath = state.url.replace('/', '');
//   const threshold = this.getThreshold(typoPath);
//   const dictionary = Object.values(paths)
//     .filter(path => Math.abs(path.length - typoPath.length) < threshold);

//   if (!dictionary.length) return null;

//   this.sortByDistances(typoPath, dictionary);

//   return `/${dictionary[0]}`;
// }
