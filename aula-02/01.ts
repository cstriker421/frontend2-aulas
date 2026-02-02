type Player = {
  name: string;
  age: number;
  game: string;
};

const playerPartial: Partial<Player> = {
  name: "Kenny",
};
// Age and game are optional

const playerReadonly: Readonly<Player> = {
  name: "John",
  age: 22,
  game: "Helldivers 2",
};
// playerReadonly.age = 10 would error for example

const playerPicked: Pick<Player, "name" | "game"> = {
  name: "Chris",
  game: "Terra Invicta",
};
// Only name and game exist, so it's OK
// player.Picked.age = 18 would error for example

const playerOmitted: Omit<Player, "age"> = {
  name: "Dana",
  game: "Hearts of Iron 4",
};
// Everything OK except age

// Alias examples
type DraftPlayer = Partial<Player>;
type LockedPlayer = Readonly<Player>;
type PreviewPlayer = Pick<Player, "name" | "game">;
type PublicPlayer = Omit<Player, "age">;