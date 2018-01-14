export function Profile(){
  return function(target, propName, desc){

    const originalMethod = target[propName];
    target[propName] = function() {
      const before = performance.now();
      originalMethod.apply(this, arguments);
      const after = performance.now();

      window["miniProfiler"].counterLastActivity.value = (after-before);
    }

    console.log(target);

    return target;
  }
}
