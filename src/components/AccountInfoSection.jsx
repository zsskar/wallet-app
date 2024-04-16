const AccountInfoSection = ({ heading, children }) => {
    return (
        <div className="bg-slate-100 justify-between mx-auto rounded-lg shadow-md overflow-hidden max-w-screen-xl" style={{ marginTop: '30px', padding: '20px' }}>
            <h2 className="text-2xl font-bold mb-4">{heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ marginTop: '20px' }}>
                {children}
            </div>
        </div>
    )
};

export default AccountInfoSection;
