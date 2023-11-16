import _add from "../helpers/add";
import _replace from "../helpers/replace";
import _search from "../helpers/search";
import _sort from "../helpers/sort";
import _sortAscendingData from "../helpers/sort_ascend";
import _sortDescendingData from "../helpers/sort_descend";
import _update from "../helpers/update";

const data_chain = (() => {
  let data = [];
  return {
    initiate(d) {
      data = d;
      return this;
    },
    sort(value) {
      data = _sort(data, value);
      return this;
    },
    sortAscent(value) {
      data = _sortAscendingData(data, value);
      return this;
    },
    sortDescent(value) {
      data = _sortDescendingData(data, value);
      return this;
    },
    add(reqbody, finder) {
      data = _add(data, reqbody, finder);
      return this;
    },
    update(reqbody, finder) {
      data = _update(data, reqbody, finder);
      return this;
    },
    search(field, value) {
      data = _search(data, field, value);
      return this;
    },
    replace(key, oldvalue, newvalue) {
      data = _replace(data, key, oldvalue, newvalue);
      return this;
    },
    print() {
      return data;
    },
  };
})();

export default data_chain;
