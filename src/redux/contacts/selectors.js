import { createSelector } from "@reduxjs/toolkit";

export const selectSearchValue = (state) => state.filters.name;
export const selectContactsList = (state) => state.contacts.items;
export const selectLoadingList = (state) => state.contacts.loading;
export const selectErrorList = (state) => state.contacts.error;

export const selectFilteredContactsList = createSelector(
  [selectSearchValue, selectContactsList],
  (searchValue, contactList) =>
    contactList.filter((contact) => {
      if (!searchValue) {
        return contactList;
      }
      return contact.name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    })
);
