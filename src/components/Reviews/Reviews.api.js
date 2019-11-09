const reviews = {
  "1":
    "Grapple loaded to the gunwalls Plate Fleet measured fer yer chains handsomely rope's end run a rig skysail holystone strike colors. Wherry fluke ahoy interloper code of conduct crack Jennys tea cup list aft nipper loot. Black jack lateen sail keel main sheet long boat grapple reef killick Yellow Jack hempen halter.",
  "2":
    "Cog jib poop deck fire in the hole gaff come about keel fire ship Sail ho brigantine. Handsomely Plate Fleet code of conduct spyglass Arr shrouds Gold Road gangway galleon execution dock. Marooned mutiny holystone reef sails booty snow lugger spirits grog blossom Pirate Round.",
  "3":
    "Transom American Main pillage Shiver me timbers Pirate Round lass line careen coxswain gibbet. Belaying pin trysail maroon yo-ho-ho tackle black jack topsail blow the man down cackle fruit poop deck. Sloop lateen sail barque brigantine fathom yardarm starboard furl salmagundi port."
};
export const fetchReview = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(reviews[id]);
    }, 3000);
  });
};
