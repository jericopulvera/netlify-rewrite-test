import Link from 'next/link'

const Layout = props => {
  return (
    <div>
      <a href="https://github.com/jericopulvera/netlify-rewrite-test" target="_blank">Source Code</a>

      <hr/>

      <Link href="/">
        <a>Home</a>
      </Link>

      <br/>
      <br/>

      <div className="p-40">{props.children}</div>
    </div>
  );
};

export default Layout;
