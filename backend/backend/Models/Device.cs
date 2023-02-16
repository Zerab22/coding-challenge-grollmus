namespace backend.Models
{
    public class Device
    {
        public string id { get; set; }
        public string name { get; set; }
        public string deviceTypeId { get; set; }
        public bool failsafe { get; set; }
        public int tempMin { get; set; }
        public int tempMax { get; set; }
        public string installationPosition { get; set; }
        public bool insertInto19InchCabinet { get; set; }
        public bool motionEnable { get; set; }
        public bool siplusCatalog { get; set; }
        public bool simaticCatalog { get; set; }
        public int rotationAxisNumber { get; set; }
        public int positionAxisNumber { get; set; }
        public bool advancedEnvironmentalConditions { get; set; }

        public Device(string id, string name, string deviceTypeId, bool failsafe, int tempMin, int tempMax, string installationPosition, bool insertInto19InchCabinet, bool motionEnable, bool siplusCatalog, bool simaticCatalog, int rotationAxisNumber, int positionAxisNumber, bool advancedEnvironmentalConditions)
        {
            this.id = id;
            this.name = name;
            this.deviceTypeId = deviceTypeId;
            this.failsafe = failsafe;
            this.tempMin = tempMin;
            this.tempMax = tempMax;
            this.installationPosition = installationPosition;
            this.insertInto19InchCabinet = insertInto19InchCabinet;
            this.motionEnable = motionEnable;
            this.siplusCatalog = siplusCatalog;
            this.simaticCatalog = simaticCatalog;
            this.rotationAxisNumber = rotationAxisNumber;
            this.positionAxisNumber = positionAxisNumber;
            this.advancedEnvironmentalConditions = advancedEnvironmentalConditions;
        }
    }
}
