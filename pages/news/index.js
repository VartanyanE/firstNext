import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1> The News Page</h1>
      <ul>
        <li>
          <Link href="/news/first">First </Link>
        </li>
        <li>Second</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
