import { Html, useProgress } from "@react-three/drei";

export default function MyLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <div className="flex justify-center flex-col items-center align-middle w-screen h-screen">
      <h3 className="text-3xl font-semibold text-orange-500">
        {progress.toPrecision(3)} %
      </h3>
      <p className="text-md text-center text-gray-500">Loading</p>
    </div>
  );
}
