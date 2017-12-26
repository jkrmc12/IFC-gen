ANTLR=java -jar /usr/local/lib/antlr-4.7-complete.jar
CURR_DIR=$(shell pwd)
GRAMMAR_IFC=$(CURR_DIR)/Express.g4
GRAMMAR_STEP=$(CURR_DIR)/STEP.g4
SCHEMA=$(CURR_DIR)/IFC4.exp
DEBUG_OUT=$(CURR_DIR)/src/bin/Debug/netcoreapp2.0

default: generate
	dotnet build ./src/IFC-gen.csproj

generate:
	$(ANTLR) -Dlanguage=CSharp -package Express -o ./src/antlr $(GRAMMAR_IFC)
	$(ANTLR) -Dlanguage=CSharp -package STEP -o ./lang/csharp/src/antlr $(GRAMMAR_STEP)

generate_debug:
	$(ANTLR) -Dlanguage=CSharp -package Express -o ./src/antlr $(GRAMMAR_IFC)

csharp:
	dotnet $(DEBUG_OUT)/IFC-gen.dll -e $(SCHEMA) -l csharp -o ./lang/csharp/src/IFC4 -t ./lang/csharp/tests
	dotnet build ./lang/csharp/IFC-dotnet.sln

csharp-tests: csharp
	cd ./lang/csharp/tests/ && dotnet xunit

proto: default
	dotnet run -p ./src/IFC-gen.csproj -e $(SCHEMA) -l proto -o ./lang/proto -t ./lang/proto

debug_parser: generate_debug
	dotnet build ./src/IFC-gen.csproj
	dotnet $(DEBUG_OUT)/IFC-gen.dll -e ./debug.exp -l csharp -o ./lang/csharp/src/IFC4 -t ./lang/csharp/tests/ -p

clean:
	rm -rf ./lang/csharp/src/antlr
	rm -rf ./src/antlr
	rm -rf ./src/bin
	rm -rf ./src/obj