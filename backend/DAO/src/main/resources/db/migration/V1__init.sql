
-- @author Mohammed Shoukath Ali
--------------------------------------------------------
--  DDL for Table flyway_schema_history
--------------------------------------------------------

  CREATE TABLE "flyway_schema_history"
   (	"installed_rank" NUMBER(*,0),
	"version" VARCHAR2(50 BYTE),
	"description" VARCHAR2(200 BYTE),
	"type" VARCHAR2(20 BYTE),
	"script" VARCHAR2(1000 BYTE),
	"checksum" NUMBER(*,0),
	"installed_by" VARCHAR2(100 BYTE),
	"installed_on" TIMESTAMP (6) DEFAULT CURRENT_TIMESTAMP,
	"execution_time" NUMBER(*,0),
	"success" NUMBER(1,0)
   )
--------------------------------------------------------
--  DDL for Index flyway_schema_history_pk
--------------------------------------------------------

  CREATE UNIQUE INDEX "flyway_schema_history_pk" ON "flyway_schema_history" ("installed_rank")

--------------------------------------------------------
--  DDL for Index flyway_schema_history_s_idx
--------------------------------------------------------

  CREATE INDEX "flyway_schema_history_s_idx" ON "flyway_schema_history" ("success")

--------------------------------------------------------
--  Constraints for Table flyway_schema_history
--------------------------------------------------------

  ALTER TABLE "flyway_schema_history" MODIFY ("installed_rank" NOT NULL ENABLE);
  ALTER TABLE "flyway_schema_history" MODIFY ("description" NOT NULL ENABLE);
  ALTER TABLE "flyway_schema_history" MODIFY ("type" NOT NULL ENABLE);
  ALTER TABLE "flyway_schema_history" MODIFY ("script" NOT NULL ENABLE);
  ALTER TABLE "flyway_schema_history" MODIFY ("installed_by" NOT NULL ENABLE);
  ALTER TABLE "flyway_schema_history" MODIFY ("installed_on" NOT NULL ENABLE);
  ALTER TABLE "flyway_schema_history" MODIFY ("execution_time" NOT NULL ENABLE);
  ALTER TABLE "flyway_schema_history" MODIFY ("success" NOT NULL ENABLE);
  ALTER TABLE "flyway_schema_history" ADD CONSTRAINT "flyway_schema_history_pk" PRIMARY KEY ("installed_rank")



