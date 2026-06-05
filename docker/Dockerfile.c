FROM gcc:12
WORKDIR /app
COPY solution.c .
RUN gcc -o solution solution.c
CMD ["./solution"]
