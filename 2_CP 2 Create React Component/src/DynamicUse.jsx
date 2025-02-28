function DynamicUse(){
  let number = 456;
  let myName = 'Jatin Vyas';
  let fullName = () => {
    return 'Jatin B. Vyas';
  }
  /**
   * This is nothing but now in jsx(means in component) you can use JS variables or methods in between tag 
   * by just using {}.
   * Earlier in JS we were using by backtick `${}`.
   */
  return <h3>
    Hello, {myName} , this is your message number: {number}.
    Your Regards,
    {fullName()}
  </h3>
}

export default DynamicUse;