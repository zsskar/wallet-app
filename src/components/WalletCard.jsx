const WalletCard = ({ title, value, icon }) => {
    return (
        <div style={{ width: '350px' }} className="hover:bg-primary-800 hover:text-white focus:ring-4 focus:ring-primary-300 bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
                <h2 className="text-xl font-semibold mb-2 flex items-center"><i className={`mr-2 ${icon}`} aria-hidden="true"></i>{title}</h2>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
};


export default WalletCard;