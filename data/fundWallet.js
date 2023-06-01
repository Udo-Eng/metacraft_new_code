import BankIcon from "../assets/fundWallet/NewFundWalletSvg/WalletHeader/bank.svg";
import CardFundingIcon from "../assets/fundWallet/NewFundWalletSvg/WalletHeader/cardFunding.svg";
import WalletTransferIcon from "../assets/fundWallet/NewFundWalletSvg/WalletHeader/walletTransfer.svg";

export const walletOptions = [
  {
    icon: () => <WalletTransferIcon width={48} height={48} />,
    text: "Transfer to wallet",
    link: "Wallet",
  },
  {
    icon: () => <CardFundingIcon width={48} height={48} />,
    text: "Fund wallet with card",
    link: "Fund Your Wallet",
  },
  {
    icon: () => <BankIcon width={48} height={48} />,
    text: "Withdraw to bank",
    link: "Withdraw",
  },
];

export const walletHistory = [
  {
    id: "1",
    image: require("../assets/fundWallet/wallet_2.png"),
    title: "Funds Transfer(009221283",
    date: "19 September 2022",
    amount: "N+4000",
  },
  {
    id: "2",
    image: require("../assets/fundWallet/payment_1.png"),
    title: "Payment for Service",
    date: "19 September 2022",
    amount: "N-8200",
  },
  {
    id: "3",
    image: require("../assets/fundWallet/payment_2.png"),
    title: "Payment for Service",
    date: "18 September 2022",
    amount: "N-3000",
  },
  {
    id: "4",
    image: require("../assets/fundWallet/payment_3.png"),
    title: "Payment for Service",
    date: "16 September 2022",
    amount: "N-2000",
  },
  {
    id: "5",
    image: require("../assets/fundWallet/payment_4.png"),
    title: "Payment for Service",
    date: "12 September 2022",
    amount: "N-2000",
  },
  {
    id: "6",
    image: require("../assets/fundWallet/payment_1.png"),
    title: "Payment for Service",
    date: "12 September 2022",
    amount: "N-2000",
  },
  {
    id: "7",
    image: require("../assets/fundWallet/wallet_2.png"),
    title: "Funds Transfer(009221283",
    date: "12 September 2022",
    amount: "N+15000",
  },
];
