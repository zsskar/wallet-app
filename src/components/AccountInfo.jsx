import AccountInfoSection from "./AccountInfoSection";
import WalletCard from "./WalletCard";

const AccountInfo = () => {
    const walletBalance = '10 ETH';

    return (
        <>
            <div className="justify-between mx-auto max-w-screen-xl" style={{ marginTop: '20px', padding: '20px' }}>
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            </div>

            <AccountInfoSection heading="Ether Price">
                <WalletCard title="In ETHER" value={walletBalance} icon="fa fa-ethereum" />
                <WalletCard title="In USD" value={walletBalance} icon="fa fa-dollar" />
                <WalletCard title="In INR" value={walletBalance} icon="fa fa-inr" />
            </AccountInfoSection>

            <AccountInfoSection heading="Wallet Balance">
                <WalletCard title="In ETHER" value={walletBalance} icon="fa fa-ethereum" />
                <WalletCard title="In USD" value={walletBalance} icon="fa fa-dollar" />
                <WalletCard title="In INR" value={walletBalance} icon="fa fa-inr" />
            </AccountInfoSection>
        </>
    );
}

export default AccountInfo;
