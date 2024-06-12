(() => {
  const temperaturesInCelsius = [33.6, 12.34];
  const AddressIpOfTheServer = "123.123.123.123";
  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  const ListOfEmailsByUserS = users.map((user) => user.email);
  const canJump = false;
  const canRun = true;
  const hasItmes = true;
  const isLoading = false;
  const InitialTimeForStart = new Date().getTime();
  const FinalTimeForEnd = new Date().getTime() - InitialTimeForStart;

  function getAllBooks() {
    throw new Error("Function not implemented.");
  }
  function getBooksByUrl(url: string) {
    throw new Error("Function not implemented.");
  }
  function obtainAreaOfSquareBySide(sideOfSquare: number) {
    throw new Error("Function not implemented.");
  }
  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
