function get(obj, path, defaultValue) {
  if (!obj || !path) {
    return defaultValue;
  }

  const keys = Array.isArray(path) ? path : path.split('.');
  let current = obj;

  for (let i = 0; i < keys.length; i += 1) {
    if (
      current === null ||
      current === undefined ||
      typeof current !== 'object'
    ) {
      return defaultValue;
    }
    current = current[keys[i]];
  }

  return current !== undefined ? current : defaultValue;
}

export default get;
