interface BubbleCardProps
{
    url?: string,
    icon: string,
    name: string
}

const BubbleCard = (props: BubbleCardProps) =>
{
    const redirection = (url: string) =>
    {
        const confirmation = window.confirm("Êtes-vous sûr de vouloir ouvrir ce lien ?");
        if (confirmation) window.open(url, '_blank');
    }

    return (
        <div className="BubbleCard" onClick={() => {if (props.url) redirection(props.url)}}>
            <img className="BubbleCard_icon" src={props.icon} alt={props.name}/>
            <span className="BubbleCard_name">{props.name}</span>
        </div>
    );
};

export default BubbleCard;