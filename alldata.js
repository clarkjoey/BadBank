function AllData(){
  const ctx = React.useContext(UserContext);
  let text = handleUser();
  
  function handleUser() {
    let array = [];
    for (let x in ctx.users) {
      array[x] =
      <>
        Name: {ctx.users[x].name} <br/>
        Email: {ctx.users[x].email} <br/>
        Password: {ctx.users[x].password} <br/>
        Balance: ${ctx.users[x].balance}.00 <br/><br/>
      </>
    }
    return array;
  }

  return (
    <Card
      txtcolor="black"
      header="JoeyBank Users"
      text={text}
    />
  ); 
}
