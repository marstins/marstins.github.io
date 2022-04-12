
export default function NavItem({handleClick, reference, currentPage, icon}) {

  return (
    <>
      <li onClick={() => handleClick(reference)}>
        <button className={currentPage === reference ? 'menu__item menu__item--highlighted' : 'menu__item'}>
          {icon}
        </button>
        <span className="menu__item__span">{reference}</span>
      </li>
    </>
  )
}