const data = [
  {
    id: 1,
    name: "Imran Khan",
    userName: "@ikOfficial",
    messages: [],
  },
  {
    id: 2,
    name: "Shahid Afridi",
    userName: "@shahidAfridiOfficial",
    messages: [],
  },
  {
    id: 3,
    name: "Wasim Akram",
    userName: "@wasAkramOfficial",
    messages: [],
  },
  {
    id: 4,
    name: "Babar Azam",
    userName: "@babar58Official",
    messages: [],
  },
]
const initialState = {
  users: [...data],
  selectedUser: null,
};

export default initialState;
