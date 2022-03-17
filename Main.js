/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
 function Hello(props) {
    // Melakukan destructing props (object)
    const { name } = props;
  
    return (
      <div>
        <h2>Hello React</h2>
        <p>Saya {name} - Frontend Engineer</p>
      </div>
    );
  }
  
 function Main() {
    return (
      <main>
        {/**
         * Mengirim props ke component Hello.
         * nama props: name
         */}
        <Hello name="Aufa" />
        <Hello name="Mikel" />
        <Hello name="Hannah" />
        <Hello name="Jonas" />
        <Hello name="Martha" />
      </main>
    );
  }

export default Main;