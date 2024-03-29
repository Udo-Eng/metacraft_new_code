import { COLORS } from "../constants";
import AddNewCard from "../screens/FundWallet/AddNewCard";
import DebitCards from "../screens/FundWallet/DebitCards";
import FundAccount from "../screens/FundWallet/FundAccount";
import FundYourWallet from "../screens/FundWallet/FundYourWallet";
import Header from "../screens/FundWallet/Header";
import Processed from "../screens/FundWallet/Processed";
import TransferToWallet from "../screens/FundWallet/TransferToWallet";
import Wallet from "../screens/FundWallet/Wallet";
import WithdrawFunds from "../screens/FundWallet/WithdrawFund";
import TransactionDetails from "../screens/FundWallet/TransactionDetails";

const WalletScreens = (Stack) => {
  return (
    <>
{/* 
<Stack.Screen
        options={{ headerShown: false }}
        name="Wallet Header"
        component={Header}
      /> */}


      <Stack.Screen
        options={{
          title: "Wallet",
          headerTintColor: COLORS.selectionText,
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
        name="Wallet"
        component={Wallet}
      />


      <Stack.Screen
        options={{
          title: "Debit Cards",
          headerTintColor: COLORS.selectionText,
        }}
        name="Debit Cards"
        component={DebitCards}
      />

      <Stack.Screen
        options={{ title: "Add New Card" }}
        name="Add New Card"
        component={AddNewCard}
      />

      <Stack.Screen
        options={{ title: "Fund Account" }}
        name="Fund Account"
        component={FundAccount}
      />


      <Stack.Screen
        options={{ headerShown: false }}
        name="Processed"
        component={Processed}
      />


      <Stack.Screen
        options={{ title: "Withdraw Funds" }}
        name="Withdraw"
        component={WithdrawFunds}
      />

    
      <Stack.Screen
        options={{ title: "Transfer to Wallet" }}
        name="Transfer to Wallet"
        component={TransferToWallet}
      />


      <Stack.Screen
        options={{ headerShown: false }}
        name="Fund Your Wallet"
        component={FundYourWallet}
      />

    <Stack.Screen
      options={{
        headerShown: false}}
        name="TransactionDetails"
        component={TransactionDetails}
       />

    </>
  );
};

export default WalletScreens;
