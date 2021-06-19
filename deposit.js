function Deposit(){
  const ctx = React.useContext(UserContext);
  const [number, setNumber]         = React.useState('');
  const [balance, setBalance]       = React.useState(`Balance: ${ctx.users[0].balance}`);
  const [show, setShow]             = React.useState(true);
  const [status, setStatus]         = React.useState('');
  const [canSubmit, setCanSubmit]   = React.useState(false);

  function validate(field){ // funciton checks if there is any number in the input, throws error if not
      if (!field || field<0) {
        setStatus('Error: Please enter a valid amount. This is a bad bank, not a stupid one');        
        setTimeout(() => setStatus(''),7000);
        return false;
      }
      setStatus('');
      return true;
  }

  function handleCreate(){  // function checks if there is an number in the input and if there is, updates the context balance and calls the display balance function
    if (!validate(parseInt(number)))     return;    
    ctx.users[0].balance += parseInt(number);
    handleBalance();
    setShow(false);
  }     

  function handleBalance(){ // function keeps running total display up to date with what the actual context balance is
    setBalance(`Balance: ${ctx.users[0].balance}`); 
  }

  function clearForm(){ // function resets form after a submission
    setNumber('');
    setShow(true);
    setCanSubmit(false);
  }

  function onChange(event){ // function checks if the form has changed, if so, allows the submit button to show
    setNumber(event);
    setCanSubmit(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      title={balance} // balance info aboce deposit field
      status={status}
      body={show ? ( // how the card looks before submitting
        <>
        <br/>
        Amount to deposit:
        <input type="input" id="number" value={number} onChange={e => onChange(e.currentTarget.value)}></input> {/* input field */}
        <br/><br/>
        {canSubmit ? (<button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>):(<></>)} {/* deposit button */}
        </>
      ):( // how the card looks after submitting
        <>
        <br/><br/>
        <h5>Success!</h5>
        <br/>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
        </>
      )}
    />  
  )
}
