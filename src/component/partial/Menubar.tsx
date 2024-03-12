interface MenuProps
{
    props: MenuStruct[]
}

const Menubar = ({ props } : MenuProps) =>
{
    const onItemClick = (event: { (): void; }) => event();

    return (
        <div className="Menubar">
            {props.map((menuItem, index) => (
                <div key={index} className="Menubar_header" onClick={() => onItemClick(menuItem.action)}>
                    <img className="Menubar_header_icon" src={menuItem.icon} alt={menuItem.value} />
                    <span className="Menubar_header_value">{menuItem.value}</span>
                </div>
            ))}
        </div>
    );
}

export default Menubar