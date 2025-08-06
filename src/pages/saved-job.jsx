import { getSavedJobs } from "@/api/apiJobs";
import JobCard from "@/components/job-card";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useMemo } from "react";
import { BarLoader } from "react-spinners";

const SavedJobs = () => {
  const { isLoaded } = useUser();

  const {
    loading: loadingSavedJobs,
    data: savedJobs,
    fn: fnSavedJobs,
  } = useFetch(getSavedJobs);

  useEffect(() => {
    if (isLoaded) {
      fnSavedJobs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  // Remove duplicates by job.id
  const uniqueSavedJobs = useMemo(() => {
    if (!savedJobs) return [];
    const seen = new Set();
    return savedJobs.filter((saved) => {
      if (seen.has(saved.job?.id)) return false;
      seen.add(saved.job?.id);
      return true;
    });
  }, [savedJobs]);

  if (!isLoaded || loadingSavedJobs) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      <h1 className="pb-8 text-6xl font-extrabold text-center gradient-title sm:text-7xl">
        Saved Jobs
      </h1>

      {loadingSavedJobs === false && (
        <div className="grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {uniqueSavedJobs.length ? (
            uniqueSavedJobs.map((saved) => (
              <JobCard
                key={saved.id}
                job={saved.job}
                onJobAction={fnSavedJobs}
                savedInit={true}
              />
            ))
          ) : (
            <div>No Saved Jobs 👀</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
