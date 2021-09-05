class RefacName {
  refacName(name) {
    return name.replaceAll('&#39;', "'").replaceAll('&amp;', '&').replaceAll('&quot;', '"');
  }
}
export default RefacName;
