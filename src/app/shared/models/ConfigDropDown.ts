export interface ConfigDropDown{
  displayKey: string;
  height: string;
  search: boolean;
  placeholder: string;
  searchPlaceholder: string;
  limitTo: number;
  customComparator: any;
  noResultsFound: string;
  moreText: string;
  searchOnKey: string;
  clearOnSelection: boolean;
  inputDirection: string;
  displayFn:(...args:any) => void |any;
  labelAdd:string;
}
