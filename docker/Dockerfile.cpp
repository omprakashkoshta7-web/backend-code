FROM gcc:12
WORKDIR /app
COPY solution.cpp .
RUN g++ -o solution solution.cpp
CMD ["./solution"]
