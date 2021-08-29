import LayoutMain from "../../components/LayoutMain/LayoutMain";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();

  console.log(currentUser);
  return (
    <LayoutMain>
      <div>This is Dashboard</div>
    </LayoutMain>
  );
}
