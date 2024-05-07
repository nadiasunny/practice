function MyNavbar() {
    return (
        <t>I am nav bar</t>
    );
}

export default function MyApp() {
    return (
        <div>
            <h>Testing</h>
            <MyNavbar />
        </div>
    );
}

ReactDOM.render(
    (
      <div>
        <h>Testing</h>
        <MyNavbar />
        </div>
    ),
    document.querySelector('#root')
  );
