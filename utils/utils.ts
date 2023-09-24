export function generateRoomNumber() {
  return (Math.random() + 1).toString(36).substring(5);
}

export function generateUserId() {
  return (Math.random() + 1).toString(36).substring(10);
}
