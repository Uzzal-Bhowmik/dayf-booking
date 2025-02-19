import HotelProfile from "./_components/HotelProfile";
import HotelRoomsContainer from "./_components/room-management/HotelRoomsContainer";

export const metadata = {
  title: "Hotel Management",
};

export default function HotelManagement() {
  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-12">
      <HotelProfile />
      <HotelRoomsContainer />
    </div>
  );
}
