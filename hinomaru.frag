#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

void main()
{
    float d = distance(vec2(0.5, 0.5), vtexCoord);
    fragColor = vec4(1.0, step(0.2, d), step(0.2, d), 1.0);
}
