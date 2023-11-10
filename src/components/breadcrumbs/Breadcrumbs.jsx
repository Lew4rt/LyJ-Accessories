import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function Breadcrumbs({ location, productTitle }) {
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumb className='custom_breadcrumb'>
        <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>
        Home
        </Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
            <Breadcrumb.Item className={isLast && 'active_breadcrumb'} key={name} linkAs={Link} linkProps={{to: routeTo}} active={isLast}>
              {isLast && productTitle ? productTitle : name}
            </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default Breadcrumbs;