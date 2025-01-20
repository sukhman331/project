function MemberDisplay({info}) {

    const expiring = new Date(info.expiring)
    const joining = new Date(info.joining)

    const timeLeft = Math.floor((expiring - joining) / (1000 * 60 * 60 * 24)) 

    return (
        <div >
            {info.memberId}{info.name}{joining.toDateString()}{expiring.toDateString()}{timeLeft}
        </div>
    )
}

export default MemberDisplay;